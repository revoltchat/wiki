# Uploading Files

File uploads work by first sending a file to the server and then using the ID provided.

You can find out what kinds of files you can upload by visiting [autumn.revolt.chat](https://autumn.revolt.chat).
This may depend on your instance, so you should determine the endpoint from the root API response.

To upload a file, pick the desired tag then send a **POST** to `{endpoint}/{tag}` along with a `multipart/form-data` body with one field `file` that contains the file you wish to upload.

You will receive the following JSON response:

```json
{
  "id": "0"
}
```

You can use the ID wherever a file is required in the API.

## Serving images

For caching purposes, use the following URL templates for file previews:

| Tag         | URL                                  |
| ----------- | ------------------------------------ |
| icons       | `{endpoint}/icons/{id}?max_side=256` |
| banners     | -                                    |
| emojis      | -                                    |
| backgrounds | -                                    |
| avatars     | `{endpoint}/icons/{id}?max_side=256` |
| attachments | -                                    |

Parameters may be forced in the future. Missing URLs _to be added_.
