/**
 * Basic abstract Command class for command identification
 */
class ChartiotCommand {
    execute() {
        throw new Error('No command logic implemented! Please check the official example on GitHub. https://github.com/riyacchi/chariot.js-example');
    }

    /**
     * Simple argument handler for getting tailed arguments with custom length and delimeters
     * @param {string} string A string to be used 
     * @param {string} delimeter A delimeter to split a text by 
     * @param {number} count How often a string should be split by the delimeter before merging the contents
     * @returns {string[]} An array of all collected arguments
     */
    tailedArguments() {
        const parts  = string.split(delimeter);
        const tail   = parts.slice(count).join(delimeter);
        const result = parts.slice(0, count);

        result.push(tail);

        return result;
    }
}

module.exports = ChartiotCommand;