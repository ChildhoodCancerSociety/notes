# Bot Main File

### Logging Level:&#x20;

* &#x20;Ex: `logging.basicConfig(level=logging.INFO)`
  * This code sets the logging level of the bot. Determining the type and amount of verbose messages sent to the console(terminal) where the bot is running.
  * `level=logging.INFO` is the most basic level with minimal output. This could be replaced with `level=logging.DEBUG` for more detailed information.



### Intents:

* Ex: `intents = discord.Intents.all()`
  * Intents in discord are like filters for the types of events the bot will see. The above code grants all intents(ONLY FOR TESTING, intents should be regulated for real world use).



### Types of Intents:

* Privileged Intents: These require explicit permission to use. You'll need to enable them in the Discord Developer Portal for your bot. Examples include:
  * `GUILD_MEMBERS`: Allows the bot to receive member-related events, such as when members join or leave the server.
  * `MESSAGE_CONTENT`: Allows the bot to receive the content of messages. Necessary for bots that need to read message content (e.g., for keyword detection).
  * `PRESENCES`: Allows the bot to see members' online/offline statuses.
* Non-Privileged Intents: These are enabled by default and don't require special permission. Examples include:
  * `GUILDS`: Allows the bot to receive events related to guilds (servers) like server updates and roles.
  * `GUILD_MESSAGES`: Allows the bot to receive messages sent in text channels.
  * `GUILD_REACTIONS`: Allows the bot to receive events related to message reactions.

### Bot Token:

* Tokens are generated specifically for a bot as its “password”. They should not be stored in any of the bot source code files. They should be held in a safe place that is not public.
