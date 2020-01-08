Custom Build of CKEditor5 classic build for [SnowbirdAgile](http://www.snowbirdagile.com)
========================================

Inbuilt Amazon S3 image upload plugin available in this package. Can not use EasyImage, CKFinder, Simple adapter or Base64 adapter with this.

![CKEditor 5 classic editor build screenshot](https://c.cksource.com/a/1/img/npm/ckeditor5-build-classic.png)

## Quick start

First, install the build from npm:

```bash
npm install --save snowbirdagile-textarea
```


Add following configurations for s3 upload
```
  config:{
    //
    s3:{
    	bucket: 'bucket-name',
        accessKey: 'access-key-id',
        secretKey: 'secret-key',
        region: 'region',
        apiVersion: 'api-version',
        acl: 'ACL',
        folderName: 'folder to save files'
       }
  }
```

And use it in your website:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/snowbirdagile-textarea/build/snbeditor.js"></script>
<script>
	ClassicEditor
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
</script>
```

Or in your JavaScript application:

```js
import ClassicEditor from 'snowbirdagile-textarea/build/snbeditor';

// Or using the CommonJS version:
// const ClassicEditor = require( 'snowbirdagile-textarea/build/snbeditor' );

ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
