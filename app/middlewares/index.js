import RouteError from "../../lib/error-handler/index.js";
import { UrlsModel } from "../models/index.js";
import config from "../../config/index.js";
import { isValidHtml, isValidUrl } from "../../lib/utils/index.js";

const checkHtmlBody = (req, res, next) => {
    const { url, htmlBody } = req.body;
    
    if (isValidUrl(url) && isValidHtml(htmlBody))
        return next();

    return next(new RouteError('html or url is not valid', 400));    
}

const checkUrlInIndexerDb = async (req, res, next) => {
    const { url } = req.body;
    try {
        const document = await UrlsModel.findOne({ url });
        
        if (document?.lastUpdated && (Math.abs(new Date() - document.lastUpdated) < config.maxDateDifference))
            throw new RouteError('Already noted', 400);

        req.document = document;
        next();
    } catch (error) {
        next(new RouteError(error.message, 500));
    }
}

export { checkHtmlBody, checkUrlInIndexerDb }