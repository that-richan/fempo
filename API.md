# API

A guide on how the communication between the app and Jira&Tempo API works.

## Jira

We support scoped API tokens.

We need:

- cloudid
- username (email)
- token

To get the cloudid, we need the name of the name of the space, example: https://fastest.atlassian.net/_edge/tenant_info
This site will return the cloudid.

API URL: https://api.atlassian.com/ex/jira/{{CLOUD_ID}}/rest/api/3 JQL search: {{API_URL}}/search/jql

Sources:

- https://developer.atlassian.com/cloud/confluence/oauth-2-3lo-apps/#3-2-construct-the-request-url
- https://support.atlassian.com/jira/kb/retrieve-my-atlassian-sites-cloud-id/
