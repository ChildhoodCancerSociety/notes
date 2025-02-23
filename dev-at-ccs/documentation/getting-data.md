# Getting Data

## Getting data from Discord:

You can get data regarding the discord server environment using parameters to the function when it is in a command decorator. \[`@commands.command()`]

### Parameters:

* `Ctx`
  * Member -> discord.Member: This will give an object that contains data on the member that sent the message. This data can be accessed using the  `.`  character. Such as member.roles for a list of roles the member is enrolled in. The member can also be accessed using `ctx.author`.
