# Git Ignore Notes

## `.gitignore` file

We will often want to add files to the repository directory just to make the bot run on our personal machines. We may not want to include these files in the actual repo as they are specific to testing. For instance, a config file that stores user information of the server that the bot is running on would be an example. We would not want user information of the test environment going on the main repository.



This is accomplished by adding these files to a file called `.gitignore`. Just add file or directory names to the file. If the file or directory you want to ignore is not in the main directory, add another `.gitignore` file in its directory.

\


Example:

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfl2ldVO5i8-TQpUN8OlrjpglU32I3qSUE4yhfxdVpx5uQ_-_ZlHhKIlGJuCvmCjyHgLtSihVYlDzLmMLpgIBBehzuJICQKGvsQNrHYC2z-q222deDI3nuT6wW-QMExz90HUYaecDC8U0ipsQnMqQVbP3vL?key=jpwtU7FTkNrTZK2P4yJ8g_2K" alt=""><figcaption><p>Location of the .gitignore file</p></figcaption></figure>

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfr56fVWNdX-TtXSvxEdqxnAq5fdvoMj0WEafHxfQEfduZ6VhGYEgVfVf8x-nSX5MGbH9lzhHIga9svC1GyX6VTpHYaRFBIVVOni0dNxMMxJPTvjFyjeFDiHuZ3i-itCTU45iqWNXj6Z7uRP287Pzpepyge?key=jpwtU7FTkNrTZK2P4yJ8g_2K" alt=""><figcaption><p>NOTE: Comments can and should be added for each entry explaining why or what the entry is for. Comments are denoted by the ‘#’ at the beginning of the line.</p></figcaption></figure>



Example of gitignore in sub directory:

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFRfBveroId5AZhFywoZMO_soIfXT-OLei7MnOsSwW9_PgEZ8846UJeDiqI2nhO7ta-_fqR806a7POwEmoxNxXylRD7CLHBHDxpRvbmdgJTCyh-Rd3fuOwF6JRyHuUEMNb9iWDph-CeGBQ7mywonqob3s_?key=jpwtU7FTkNrTZK2P4yJ8g_2K" alt=""><figcaption></figcaption></figure>

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfXdEFIwnYcDO0NdPudoK36voTS-X1i478gflS0q_q5LtlZ04Y89PchWjjJcXY-i_wqqm3YHyG4xSQGkdPRRt0t0j0W6XgAv2CkTby-VV38_zYRpLa2bmogcOnbEMsI8xvlstmM2MZW4pTbQHkATowu6S1p?key=jpwtU7FTkNrTZK2P4yJ8g_2K" alt=""><figcaption><p>NOTE: The ‘*’ is a bash wildcard character that represents all entries in a directory. The ‘! .gitignore’ tells git to not ignore the .gitignore file; since we are ignoring all files in this directory. </p></figcaption></figure>

\


Additional information for git ignore: [gitignore documentation](https://git-scm.com/docs/gitignore)

\
