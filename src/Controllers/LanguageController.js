const languages = require("../Text");

export default function getContent(language){
    return languages[language];
}