# Inbuild Components

## Activity

## Avatar

## Blocker

## Bookmarks

## Card

It is a bit part of the card layout and also used in the admin settings.

### Usage

``` vue
<v-card title="New Card"/>
```

### Example

![Card](../img/components/card.png)

The here shown card is created using:
``` vue
<v-card
  title="Global Settings"
  subTitle="13 Items"
  icon="public"
  to="settings/global"
/>
```

### Properties

| name           | description    | options         | default       | type          |
| :------------- | :------------- | :-------------- |:------------- |:------------- |
| element        |                | article         | article       | String        |
| titleElement   |                | h1, h2, h3...   | h2            | String        |
| icon           |                | directus-icons  | null          | String        |
| color          |                | directus-colors | gray          | String        |
| src            |                |                 | null          | String        |
| title*         |                |                 |               | String        |
| subTitle       |                |                 |               | String        |
| body           |                |                 | null          | String        |
| to             |                |                 | null          | String        |
| href           |                |                 | null          | String        |
| label          |                |                 | null          | String        |
| opacity        |                | full, half      | full          | String        |
| selected       |                |                 | null          | Boolean       |
| selectionMode  |                |                 | false         | Boolean       |
| options        |                |                 | null          | Object        |
| disabled       |                |                 | false         | Boolean       |

\* is required

## Details

## Error

## Extension

## Field Duplicate

## Field Setup

## Form

## Form Inputs

### Button

### Checkbox

### Input

### Radio

### Select

### Simple Select

### Slider

### Textarea

### Toggle

## Header

## Icon

### Usage

```vue
<v-icon name="person" />
```

### Example

![Icon](../img/components/icon.png)

The here shown icon is created using:
``` vue
<v-icon
  title="Global Settings"
  subTitle="13 Items"
  icon="public"
  to="settings/global"
/>
```

### Properties

| name           | description                            | options            | default       | type           |
| :------------- | :------------------------------------- | :----------------- |:------------- |:-------------- |
| name*          | The name of the icon to render         |                    |               | String         |
| size           | The size of the icon in px             | 16, 18, 24, 36, 48 | 24            | Number, String |
| color          | A color name out of the global pallete |                    | undefined     | String         |
\* is required

## Install

## Invisible Label

## Items

## Loader

## Modals

### Alert

### Confirm

### Modal Base

### Modal

### Prompt

## Notice

## Notifications

## Permissions

## Progress Ring

## Search Filter

## Sidebars

## Signal

## Table

## Upload
