# Making a New Feature

## How to Get Started Developing New Features <a href="#docs-internal-guid-c9cdc10d-7fff-34ba-6bb8-264b2412ce5e" id="docs-internal-guid-c9cdc10d-7fff-34ba-6bb8-264b2412ce5e"></a>

### Adding a New Cog

1. Create a new Python file in the cogs/ directory, e.g. my\_feature.py.&#x20;
2. Define a class that inherits from commands.Cog and decorate it accordingly.
   * &#x20;For example:

```python
from discord.ext import commands
class MyFeatureCog(commands.Cog):
def __init__(self, bot):
 		self.bot = bot
    
@commands.command()
    	async def my_command(self, ctx):
        		await ctx.send("Hello from my new feature!")
        
def setup(bot):
    	bot.add_cog(MyFeatureCog(bot))

```

3. Import functions from `utils/helpers.py` in your cogs:

```python
import utils.helpers as helpers
```

4. Use functions in `utils/helpers.py`:

```python
variable = helpers.function(arguments)
# or,
helpers.function(arguments)
```

### Best Practices <a href="#docs-internal-guid-862f206d-7fff-ef2e-0ea4-4f29d36533ca" id="docs-internal-guid-862f206d-7fff-ef2e-0ea4-4f29d36533ca"></a>

1. **Keep Cogs Focused**: Each cog should focus on a specific set of related commands or functionality to maintain clarity and organization. \

2. **Use Helper Functions**: Utilize `helpers.py` for any common functionality that may be used in multiple cogs.&#x20;
3. **Documentation**: Comment and document code in your cogs and helpers to make it easier for team members to understand the purpose and usage of code.

