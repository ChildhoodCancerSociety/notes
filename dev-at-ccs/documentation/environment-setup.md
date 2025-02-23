# Environment Setup

### Getting Started:

**Learn**:

* Learn Linux/Bash shell basics: [Bash and GitBash for Beginners](https://www.freecodecamp.org/news/linux-command-line-tutorial/)
* Learn Python basics: [Python Basics Course](https://www.youtube.com/watch?v=rfscVS0vtbw)
* Learn Python Async IO: [AsyncIO Documentation](https://realpython.com/async-io-python/)

**Install**:

* Install Git Bash shell: [GitBash for Windows](https://git-scm.com/downloads/win)
* Install Python: [Python for Windows](https://www.python.org/downloads/)

#### Creating a Python Virtual Environment:

1. <mark style="color:purple;">Navigate/create directory(folder) where the project is</mark>:

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfDTdq-HGERJ52luAMIYkdqtqnPe179E17hi1QXh0Hg_04lNvhFuJ5HgqKEHtH8q2sR83X6xlLVDwEGwuqOBbje15PElMRsYfjcW45o1FP1LqjX0OXxvPO-m9ABioQ-77fVR39G1qeVsf99NVz4tKzFBb4Q?key=hJmyoRoFsKhJCSqmS-90og" alt=""><figcaption></figcaption></figure>

2. <mark style="color:purple;">Create the python virtual environment</mark>:

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcPFO3s7AqtBdmYOsTXO3WRkynXC3i0jNvQqAFt2bqWvS02C4ZGhyzuA329A6gLexokTvOF-8JbP-xeHpVTnfbzfWaEfnujsUaD5IteYxaP5Npe8_7fktwvm1E6a957eLMEpkA6dyKJZprxrzc_FjQ9txMu?key=hJmyoRoFsKhJCSqmS-90og" alt=""><figcaption></figcaption></figure>

The command {`python -m venv .venv`} is used:&#x20;

* `-m` option is used to run a specific python module
* `venv` is the python module that creates a virtual environment
* `.venv` is the name for the virtual environment directory

3. <mark style="color:purple;">Activate python virtual environment</mark>:

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc4Ac_0ZlXXIqXiLXeY5GjVqkryO_XsSu6AWbzpi8lDEa-PAixFvZQ7s-YOG1J63mWj8j-zDRBqgGa2zic5cC7Q84ZEVFgcKBXm3la3xdSVbJdg-ZiVbxVV5Fuc2GOHW34C2mRPYYL6w8oTICYXDYURRBw?key=hJmyoRoFsKhJCSqmS-90og" alt=""><figcaption></figcaption></figure>

Within the project directory that is the parent to the `.venv` directory, use the command&#x20;

{`. ./.venv/Scripts/activate`}.

* The period in the beginning is shorthand for the command {`source`}.
* `./` is used to run a bash script, represented by the script's relative directory.
* Activate is the name of the script that activates the virtual environment.
* You can now run commands and interact with the project.

The source command specifies for a script to be run in the current shell.

You can determine if you are using the virtual environment if you see “(`.venv`)”&#x20;

above your command prompt.

4. <mark style="color:purple;">Using Python and Pip in a virtual environment</mark>:
   * Use the command {`.venv/bin/pip`} and {`.venv/bin/python`} to access the binaries within the virtual environment.
5. <mark style="color:purple;">Running the bot for the first time</mark>:
   * You must run the following commands to install dependencies
   * (_while inside the virtual environment_)
     * `.venv/bin/pip install httpx`
     * `.venv/bin/pip install discord`
     * `.venv/bin/pip install pyyaml`
     * `.venv/bin/pip install audioop-lts`
     * `.venv/bin/pip install apscheduler`
   * If running the bot proceeds to give ‘module not found’ errors, attempt to istall them with `pip`.&#x20;
6. <mark style="color:purple;">Deactivating the virtual environment</mark>:

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdsG0lV72tneuCgouWjjoE605-Q-djnSSbPAlrXWi3BzxHMWiEJEZ4C6KrtB9IXSC5Z_Cdh5LncsCMl_DtsT0AosRSr3L1eEE8XtnVkaehSudDLLbkDiOzttci93qfE-yjBSAgUQeM4B7eojDWZc-9Jvxhm?key=hJmyoRoFsKhJCSqmS-90og" alt=""><figcaption></figcaption></figure>

Navigate to the Scripts directory in `.venv` and enter {`deactivate`} to run the deactivate batch script (This is not a bash script which is why the syntax does not require a dot). If the “(`.venv`)” above your prompt disappears, the operation is successful.

7. <mark style="color:purple;">Creating a server and bot account</mark>:&#x20;
   * [Bot Account Creation Tutorial](https://www.upwork.com/resources/how-to-make-discord-bot)

