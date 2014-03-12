/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.TypedVector3 = function ( array, offset ) {
	
	this.array = array;
	this.offset = offset;

};

THREE.TypedVector3.prototype = Object.create( THREE.Vector3.prototype );

Object.defineProperties( THREE.TypedVector3.prototype, {
	'x': {
		get: function () { return this.array[ this.offset ]; },
		set: function ( v ) { this.array[ this.offset ] = v; }
	},
	'y': {
		get: function () { return this.array[ this.offset + 1 ]; },
		set: function ( v ) { this.array[ this.offset + 1 ] = v; }
	},
	'z': {
		get: function () { return this.array[ this.offset + 2 ]; },
		set: function ( v ) { this.array[ this.offset + 2 ] = v; }
	}
} );