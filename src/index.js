const Alexa = require("alexa-sdk");

exports.handler = function (event, context) {
    console.log(JSON.stringify(event, null, 2));
    const alexa = Alexa.handler(event, context);
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    "LaunchRequest": function () {
        this.emit("SayHello");
    },
    "HelloWorldIntent": function () {
        this.emit("SayHello")
    },
    "SayHello": function () {
        this.response.speak("Hello World!");
        this.emit(":responseReady");
    },
    "AMAZON.HelpIntent": function () {
        const speechOutput = "This is the Hello World Sample Skill. ";
        const reprompt = "Say hello, to hear me speak.";

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(":responseReady");
    },
    "AMAZON.CancelIntent": function () {
        this.response.speak("Goodbye!");
        this.emit(":responseReady");
    },
    "AMAZON.StopIntent": function () {
        this.response.speak("See you later!");
        this.emit(":responseReady");
    }
};