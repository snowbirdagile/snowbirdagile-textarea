import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

import Adapter from './adapter';

export default class S3upload extends Plugin {
	static get requires() {
		return [ FileRepository ];
	}

	static get pluginName() {
		return 'S3upload';
	}

	init() {
		const params = this.getParams();
		if ( !params ) {
			return;
		}

		this.editor.plugins.get(
			'FileRepository'
		).createUploadAdapter = loader =>
			new Adapter( loader, params, this.editor.t );
	}

	getParams() {
		if ( !this.editor.config.get( 's3' ) ) {
			// eslint-disable-next-line no-undef
			console.warn( 's3 is not configured' );
			return null;
		}

		const bucket = this.editor.config.get( 's3.bucket' );
		const accessKey = this.editor.config.get( 's3.accessKey' );
		const secretKey = this.editor.config.get( 's3.secretKey' );
		const region = this.editor.config.get( 's3.region' );
		const apiVersion = this.editor.config.get( 's3.apiVersion' );
		const acl = this.editor.config.get( 's3.acl' );
		const folderName = this.editor.config.get( 's3.folderName' );

		if ( !bucket ) {
			// eslint-disable-next-line no-undef
			console.warn( 's3.bucket is not configured' );
			return null;
		}

		if ( !accessKey ) {
			// eslint-disable-next-line no-undef
			console.warn( 's3.accessKey is not configured' );
			return null;
		}

		if ( !secretKey ) {
			// eslint-disable-next-line no-undef
			console.warn( 's3.secretKey is not configured' );
			return null;
		}

		if ( !region ) {
			// eslint-disable-next-line no-undef
			console.warn( 's3.region is not configured' );
			return null;
		}

		if ( !apiVersion ) {
			// eslint-disable-next-line no-undef
			console.warn( 's3.apiVersion is not configured' );
			return null;
		}

		if ( !acl ) {
			// eslint-disable-next-line no-undef
			console.warn( 's3.acl is not configured' );
			return null;
		}

		if ( !folderName ) {
			// eslint-disable-next-line no-undef
			console.warn( 's3.folderName is not configured' );
			return null;
		}

		return {
			bucket,
			accessKey,
			secretKey,
			region,
			apiVersion,
			acl,
			folderName
		};
	}
}
