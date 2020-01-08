import AWS from 'aws-sdk';

export default class Adapter {
	constructor( loader, params, t ) {
		this.loader = loader;
		this.params = params;
		this.t = t;
	}

	upload() {
		return new Promise( ( resolve, reject ) => {
			const {
				bucket,
				accessKey,
				secretKey,
				region,
				apiVersion,
				acl,
				folderName
			} = this.params;
			const s3 = new AWS.S3( {
				apiVersion,
				params: { Bucket: bucket },
				region,
				accessKeyId: accessKey,
				secretAccessKey: secretKey
			} );

			const albumPhotosKey = encodeURIComponent( folderName ) + '/';
			this.loader.file
				.then( file => {
					const iconKey = albumPhotosKey + file.name;
					s3.upload( { Key: iconKey, Body: file, ACL: acl }, ( err, data ) => {
						if ( err ) {
							// eslint-disable-next-line no-undef
							console.log( 'err', err );
							reject( err.message );
						} else {
							resolve( { default: data.Location } );
						}
					}
					);
				} );
		} );
	}

	abort() {
		// if (this.xhr) {
		// 	this.xhr.abort();
		// }
	}
}
