# Trello API

The Trello API is extremely powerful and fun to use. Building a full application with Trello for web or mobile means getting to know the various concepts and models making up Trello.

Link to official documentaion is [here](https://developer.atlassian.com/cloud/trello/rest/).

## End-point: Get all boards

This API endpoint lists the boards that a user is a member of.

## Request

### Path Parameters

- **id** (`TrelloID`) **REQUIRED**
  - The ID or username of the member
  - Pattern: `^[0-9a-fA-F]{24}$`

### Query Parameters

- **filter** (`string`)

  - Can be `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`
  - Default: `all`
  - Valid values: `all`, `closed`, `members`, `open`, `organization`, `public`, `starred`

- **fields** (`BoardFields`)

  - Can be `all` or a comma-separated list of board fields
  - Valid values: `id`, `name`, `desc`, `descData`, `closed`, `idMemberCreator`, `idOrganization`, `pinned`, `url`, `shortUrl`, ...(Show more)

- **lists** (`string`)

  - Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`
  - Default: `none`
  - Valid values: `all`, `closed`, `none`, `open`

- **organization** (`boolean`)

  - Whether to include the Organization object with the Boards
  - Default: `false`

- **organization_fields** (`OrganizationFields`)
  - Can be `all` or a comma-separated list of organization fields
  - Style: form
  - Valid values: `id`, `name`

## Responses

### 200 OK

- **Success**
  - Content-Type: `application/json`

### Method: GET

> ```
> {{baseUrl}}/members/me/boards?key={{trelloKey}}&token={{trelloToken}}
> ```

### Query Params

| Param | value           |
| ----- | --------------- |
| key   | {{trelloKey}}   |
| token | {{trelloToken}} |

## End-point: Create board

This API endpoint allows the creation of a new board.

###Request

### Query Parameters

- **name** (`string`) **REQUIRED**

  - The new name for the board. Must be 1 to 16384 characters long.
  - Min length: 1
  - Max length: 16384

- **defaultLabels** (`boolean`)

  - Determines whether to use the default set of labels.
  - Default: `true`

- **defaultLists** (`boolean`)

  - Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.
  - Default: `true`

- **desc** (`string`)

  - A new description for the board, 0 to 16384 characters long.
  - Min length: 0
  - Max length: 16384

- **idOrganization** (`TrelloID`)

  - The ID or name of the Workspace the board should belong to.
  - Pattern: `^[0-9a-fA-F]{24}$`

- **idBoardSource** (`TrelloID`)

  - The ID of a board to copy into the new board.
  - Pattern: `^[0-9a-fA-F]{24}$`

- **keepFromSource** (`string`)

  - To keep cards from the original board, pass in the value `cards`.
  - Default: `none`
  - Valid values: `cards`, `none`

- **powerUps** (`string`)

  - The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.
  - Valid values: `all`, `calendar`, `cardAging`, `recap`, `voting`

- **prefs_permissionLevel** (`string`)

  - The permissions level of the board. One of: `org`, `private`, `public`.
  - Default: `private`
  - Valid values: `org`, `private`, `public`

- **prefs_voting** (`string`)
  - Who can vote on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
  - Default: `disabled`
  - Valid values: `disabled`, `members`, `observers`, `org`, `public`

## Responses

### 200 OK

- **Success**

### Method: POST

> ```
> {{baseUrl}}/boards/?name=Learning Postman&key={{trelloKey}}&token={{trelloToken}}
> ```

### Query Params

| Param | value            |
| ----- | ---------------- |
| name  | Learning Postman |
| key   | {{trelloKey}}    |
| token | {{trelloToken}}  |

## End-point: Get single board

This API endpoint retrieves details for a single board by its ID.

## Request

### Path Parameters

- **id** (`TrelloID`) **REQUIRED**
  - The ID of the board.
  - Pattern: `^[0-9a-fA-F]{24}$`

### Query Parameters

- **actions** (`string`)

  - A nested resource. Read more about actions as nested resources.
  - Default: `all`

- **boardStars** (`string`)

  - Valid values: `mine`, `none`.
  - Default: `none`

- **cards** (`string`)

  - A nested resource. Read more about cards as nested resources.
  - Default: `none`

- **card_pluginData** (`boolean`)

  - Use with the `cards` param to include card pluginData with the response.
  - Default: `false`

- **checklists** (`string`)

  - A nested resource. Read more about checklists as nested resources.
  - Default: `none`

- **customFields** (`boolean`)

  - A nested resource. Read more about custom fields as nested resources.
  - Default: `false`

- **fields** (`string`)

  - The fields of the board to be included in the response. Can be `all` or a comma-separated list of specific fields.
  - Default: `name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames`
  - Valid values include: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idMemberCreator`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`

- **labels** (`string`)

  - A nested resource. Read more about labels as nested resources.
  - Default: unspecified

- **lists** (`string`)

  - A nested resource. Read more about lists as nested resources.
  - Default: `open`

- **members** (`string`)
  - A nested resource. Read more about members as nested resources.
  - Default: `none`

## Responses

### 200 OK

- Indicates successful retrieval of the board details.

### 401 Unauthorized

- Access token is missing or invalid.

### 404 Not Found

- The board with the specified ID was not found.

### DEFAULT

- **Unexpected error**
  - Content-Type: `application/json`
  - **Error**: Description of the error.

### Method: GET

> ```
> {{baseUrl}}/boards/:id?key={{trelloKey}}&token={{trelloToken}}
> ```

### Query Params

| Param | value           |
| ----- | --------------- |
| key   | {{trelloKey}}   |
| token | {{trelloToken}} |

## End-point: Get lists

This API endpoint retrieves all the lists on a specified board.

## Request

### Path Parameters

- **id** (`TrelloID`) **REQUIRED**
  - The ID of the board.
  - Pattern: `^[0-9a-fA-F]{24}$`

### Query Parameters

- **cards** (`ViewFilter`)

  - Filter to apply to Cards.
  - Valid values: `all`, `closed`, `none`, `open`

- **card_fields** (`string`)

  - Can be `all` or a comma-separated list of card fields.
  - Default: `all`

- **filter** (`ViewFilter`)

  - Filter to apply to Lists.
  - Valid values: `all`, `closed`, `none`, `open`

- **fields** (`string`)
  - Can be `all` or a comma-separated list of list fields.
  - Default: `all`

## Responses

### 200 OK

- **Success**
  - Content-Type: `application/json`
  - Returns an array of `TrelloList` objects.

### Method: GET

> ```
> {{baseUrl}}/boards/:id/lists?key={{trelloKey}}&token={{trelloToken}}
> ```

### Query Params

| Param | value           |
| ----- | --------------- |
| key   | {{trelloKey}}   |
| token | {{trelloToken}} |

## End-point: Create TODO list

This API endpoint allows for the creation of a new TODO list on a specified board.

## Request

### Path Parameters

- **id** (`TrelloID`) **REQUIRED**
  - The ID of the board where the list will be created.
  - Pattern: `^[0-9a-fA-F]{24}$`

### Query Parameters

- **name** (`string`) **REQUIRED**
  - The name of the new list. Must be 1 to 16384 characters long. In this case, "TODO".
- **pos** (`string`)
  - Determines the position of the new list on the board. Can be `top`, `bottom`, or a positive number to specify an exact position.
  - Default: `top`

## Responses

### 200 OK

- **Success**
  - Content-Type: `application/json`
  - Returns a `TrelloList` object representing the newly created list.

### Method: POST

> ```
> {{baseUrl}}/boards/:id/lists?name=TODO&key={{trelloKey}}&token={{trelloToken}}
> ```

### Query Params

| Param | value           |
| ----- | --------------- |
| name  | TODO            |
| key   | {{trelloKey}}   |
| token | {{trelloToken}} |

## End-point: Create DONE list

This API endpoint allows for the creation of a new DONE list on a specified board.  
Request  
Path Parameters  
id (TrelloID) REQUIRED  
The ID of the board where the list will be created.  
Pattern: ^\[0-9a-fA-F\]{24}$

Query Parameters  
name (string) REQUIRED  
The name of the new list. Must be 1 to 16384 characters long. In this case, "DONE".

pos (string)  
Determines the position of the new list on the board. Can be top, bottom, or a positive number to specify an exact position.  
Default: top

Responses  
200 OK  
Success  
Content-Type: application/json  
Returns a TrelloList object representing the newly created list.

### Method: POST

> ```
> {{baseUrl}}/boards/:id/lists?name=DONE&key={{trelloKey}}&token={{trelloToken}}
> ```

### Query Params

| Param | value           |
| ----- | --------------- |
| name  | DONE            |
| key   | {{trelloKey}}   |
| token | {{trelloToken}} |

## End-point: Create card

This API endpoint allows for the creation of a new card. Parameters for creating a card can be passed as query parameters or within a JSON request body.

## Request

### Query Parameters

- **name** (`string`)
  - The name for the card.
- **desc** (`string`)
  - The description for the card.
- **pos** (`oneOf [string, number]`)
  - The position of the new card. Can be `top`, `bottom`, or a positive float.
- **due** (`string`)
  - A due date for the card.
  - Format: date
- **start** (`string`)
  - The start date of a card, or `null`.
  - Nullable: true
  - Format: date
- **dueComplete** (`boolean`)
  - Indicates whether the due date is marked as complete.
- **idList** (`TrelloID`) **REQUIRED**
  - The ID of the list the card should be created in.
  - Pattern: `^[0-9a-fA-F]{24}$`
- **idMembers** (`array`)
  - Comma-separated list of member IDs to add to the card.
- **idLabels** (`array`)
  - Comma-separated list of label IDs to add to the card.
- **urlSource** (`string`)
  - A URL starting with `http://` or `https://`.
  - Format: url

## Responses

### 200 OK

- **Success**
  - Content-Type: `application/json`
  - Returns a `Card` object representing the newly created card.

### Method: POST

> ```
> {{baseUrl}}/cards?idList=65f76b20f1482f9113dc1ce4&key={{trelloKey}}&token={{trelloToken}}&name=Sign-up for Trello
> ```

### Query Params

| Param  | value                    |
| ------ | ------------------------ |
| idList | 65f76b20f1482f9113dc1ce4 |
| key    | {{trelloKey}}            |
| token  | {{trelloToken}}          |
| name   | Sign-up for Trello       |

## End-point: Move card to DONE list

This API endpoint updates an existing card. Parameters for updating a card can be passed as query parameters or within a JSON request body. In this case we are updating the list attribute of card to match the DONE list.

## Request

### Path Parameters

- **id** (`TrelloID`) **REQUIRED**
  - The ID of the card to update.
  - Pattern: `^[0-9a-fA-F]{24}$`

### Query Parameters

- **name** (`string`)

  - The new name for the card.

- **desc** (`string`)

  - The new description for the card.

- **closed** (`boolean`)

  - Whether the card should be archived (`true` for archived).

- **idMembers** (`TrelloID`)

  - Comma-separated list of member IDs.
  - Style: form
  - Pattern: `^[0-9a-fA-F]{24}$`

- **idAttachmentCover** (`TrelloID`)

  - The ID of the image attachment to use as the card's cover, or `null` for none.
  - Pattern: `^[0-9a-fA-F]{24}$`

- **idList** (`TrelloID`)

  - The ID of the list the card should be in.
  - Pattern: `^[0-9a-fA-F]{24}$`

- **idLabels** (`TrelloID`)

  - Comma-separated list of label IDs.
  - Style: form
  - Pattern: `^[0-9a-fA-F]{24}$`

- **idBoard** (`TrelloID`)

  - The ID of the board the card should be on.
  - Pattern: `^[0-9a-fA-F]{24}$`

- **pos** (`oneOf [string, number]`)

  - The position of the card in its list. Can be `top`, `bottom`, or a positive float.

- **due** (`string`)

  - When the card is due, or `null`.
  - Nullable: true
  - Format: date

- **start** (`string`)

  - The start date of a card, or `null`.
  - Nullable: true
  - Format: date

- **dueComplete** (`boolean`)

  - Whether the due date should be marked complete.

- **subscribed** (`boolean`)

  - Whether the member should be subscribed to the card.

- **address**, **locationName**, **coordinates** (`string`)

  - For use with/by the Map View. Coordinates should be `latitude,longitude`.

- **cover** (`object`)
  - Updates the card's cover with options for `color`, `brightness`, `url`, `idAttachment`, and `size`. Parameters are mutually exclusive except for `brightness`, which can be combined with any other.

## Responses

- **200 OK**
  - **Success**
  - Content-Type: `application/json`
  - Returns the updated `Card` object.

### Method: PUT

> ```
> {{baseUrl}}/cards/:id?key={{trelloKey}}&token={{trelloToken}}&idList=65f76cb9377679ca019750a6
> ```

### Query Params

| Param  | value                    |
| ------ | ------------------------ |
| key    | {{trelloKey}}            |
| token  | {{trelloToken}}          |
| idList | 65f76cb9377679ca019750a6 |

## End-point: Delete a board

This API endpoint allows for the deletion of a specific board.

## Request

### Path Parameters

- **id** (`TrelloID`) **REQUIRED**
  - The ID of the board to be deleted.
  - Pattern: `^[0-9a-fA-F]{24}$`

## Responses

### 200 OK

- **Success**
  - Indicates that the board has been successfully deleted.

### Method: DELETE

> ```
> {{baseUrl}}/boards/:id?key={{trelloKey}}&token={{trelloToken}}
> ```

### Query Params

| Param | value           |
| ----- | --------------- |
| key   | {{trelloKey}}   |
| token | {{trelloToken}} |
