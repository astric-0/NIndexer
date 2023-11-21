import * as cheerio from 'cheerio';

const isValidHtml = html => {
    try {
        cheerio.load(html);
        return true;
    } catch (error) {
        return false;
    }
}

const isValidUrl = url => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

export { isValidHtml, isValidUrl };