# File Structure

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfYhK2IbO96F0cCb_6f_xgPsa9sbPwMtYyjwFWCYsKsdn9z8oHJq4HEoEdP0Pk4eY7j3L5tdMk_uZKdABfXBAOM_VW8WjCvlW8fzGMOOXhQBgJgf1g-XmhpEZI2w8Z-SZNE7TZy9ODYXKbrS5EL_qiZc0js?key=53jgLR7nHIwT-hCVX_M4mA" alt=""><figcaption><p><em>This is what the project will look like at it’s parent folder level(top level).</em></p></figcaption></figure>

1. `main.py`:

* This is the core file of the Discord bot where the main functionality is implemented.
* It initializes the bot, loads the different cogs (modules), and handles events.
* Team members are not required to modify this file, allowing the functionality to remain stable as they develop features in their own cogs and helper functions.

2. `cogs/my_cog.py`:

* This file is designated for specific features or commands that can be added to the bot.
* Team members can design their own cogs by defining classes here, which inherit from the base classes provided by `Discord.py`.
* This modular approach enables each member to work on their features independently.

3. `utils/`:&#x20;

* This where we will store source files which aid cog functionality. Within this directory, there is also a `helpers.py` file that houses generic functions available to all cogs.

4. `utils/helpers.py`:

* This file is intended to contain utility functions that can be used across different modules of the bot.
* Team members can develop functions that perform specific tasks and can be used in their cogs, promoting code reusability.

5. `cache/`:&#x20;

* This folder is used to store sub-folders containing cache files for the bot.

6. `config/`:&#x20;

* This folder is used to store configuration files for the `bot/cogs`.

\
\
