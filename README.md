# react-twitter-widgets

Quick and easy Twitter widgets for React.

Available widgets: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`.

See below for usage.

## Installation

```
npm install --save react-twitter-widgets
```

## Example

```javascript
import { Timeline } from 'react-twitter-widgets'

// Timeline (with options)
<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'TwitterDev'
  }}
  options={{
    height: '400'
  }}
  // Optional
  // onLoad={() => console.log('Timeline is loaded!')}
/>

// Tweet (without options)
<Tweet tweetId="841418541026877441" />
```

## Usage

[**Official Twitter Documentation**](https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions)

Available widgets: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`

**`Timeline`** requires a `dataSource` object prop.
The source type can be `profile`, `likes`, `list`, `collection`, or `url`.
They each require their own co-fields; see Twitter documentation.

**`Share`** requires a `url` prop.

**`Follow`** and **`Mention`** require a `username` prop. NOTE that the Twitter
documentation now refers to this as *screenName*.

**`Hashtag`** requires a `hashtag` prop.

**`Tweet`** requires a `tweetId` prop. Ex. `'511181794914627584'`

All widgets accept an optional `options` object prop. To learn more about the
available options (height, width, align, count, etc), see the Twitter
documentation.

All widgets accept an optional `onLoad` callback, which is called every time
the widget is loaded/reloaded (both on inital load and updates).

## Further Information

* This library loads the remote *Twitter for Websites* script.
* Twitter widgets are only loaded in the browser. A blank div will be rendered during SSR.
* Unfortunately, widget errors cannot be handled by this library. Twitter catches and logs any errors before they can bubble up. Therefore, if the remote library can't be loaded or if a supplied screen name does not exist, the widget will render as a blank div.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

* Andrew Suzuki - @andrewsuzuki - [andrewsuzuki.com](http://andrewsuzuki.com)

## License

MIT
