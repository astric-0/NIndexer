import * as cheerio from "cheerio";
import { UrlsModel, KeywordsModel } from "../models/index.js";
import { urlStatus, isStopWord } from "../../lib/utils/index.js";
import config from "../../config/index.js";

const indexUrl = async (req, res) => {
    try {
        const { url, htmlBody, links } = req.body;        
        const { tagWeights } = config;
        
        const wordWeights = {};
        const $ = cheerio.load(htmlBody);
        $('*').each((_, element) => {
            const tagName = $(element).prop('tagName');

            if (tagName == 'META' || !tagWeights[tagName]) return;

            $(element).text()?.trim()?.split(/[\W\d_]/g).forEach(word => {   
                const lowerCased = word.toLowerCase();      
                if (isStopWord(lowerCased)) return;
                wordWeights[lowerCased] = (wordWeights[lowerCased] || 0) + tagWeights[tagName];
            });
        });

        const words = Object.keys(wordWeights);
        words.forEach(async word => {
            try {
                const doc = await KeywordsModel.findOne({ word });
                const weight = '' + wordWeights[word];                
                if (doc) {
                    if (doc.weights[weight]?.includes(url)) return;
                    
                    if (!doc.weights.has(weight))
                        doc.weights[weight] = [url];
                    else
                        doc.weights[weight].push(url);

                    await doc.save();
                }
                else {
                    await KeywordsModel({
                        word, 
                        weights: new Map([
                            [ weight, [url] ]
                        ])
                    })
                        .save();
                }
            } catch (error) {
                console.error(error);
            }
        });

        await UrlsModel.findOneAndUpdate({ url },
            {
                url,
                links,
                status: urlStatus.indexed,
            },
            {
                upsert: true,
                new: true,
            }
        );

        return res.send({ message: 'proccessed' });
    } catch (error) {
        console.error(error);
        const { message, statusCode } = error;
        if (statusCode)
            return res.status(statusCode).send({ error: message });
        return res.send({ error: message });
    }
}

const imgList = (_, res) => {
    return res.status(200).send(JSON.stringify({
        projectImg: 'project.gif',
        requirementImg: 'requirements2.gif',
    }));
}

export { indexUrl, imgList };