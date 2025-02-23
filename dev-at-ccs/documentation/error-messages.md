# Error Messages

Thus far, I have made error messages throughout the bot using the following pattern. These messages are sent to standard output(terminal) when the bot has an error. \


Due to the structure of discord and the bot, exceptions and errors DO NOT crash the bot regardless if they are caught or not. With this in mind, we still want to catch all possible exceptions and errors and display error messages. This will make debugging easier and minimize unexpected outcomes of faulty code.\


### Syntax:

**Error**: error message \[function tag / identifiable name]

### Example:

**Error**: config file could not be found \[main::getToken]



* In this instance ‘main’ is the name of the file and ‘getToken’ is the name of the function.
* Typically, the first name on the left of the double colon will be the name of the class. Although, this function does not belong to a class so I made it the name of the file. Following this, if this code did not belong to a function, the tag would read: \[main].
