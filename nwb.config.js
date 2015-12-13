module.exports = {
	// Let nwb know this is a React component module when generic build commands
	// are used.
	type: 'react-component',
	// Should nwb create a UMD build for this module?
	umd: true,
	// The name of the global variable the UMD build of this module will export
	global: 'ContainerQueryContainer',
	// ...
	babel: {
		stage: 0,
	},
	// Mapping from the npm package names of this module's peerDependencies to the
	// global variables they're expected to be available as for use by the UMD
	// build.
	externals: {
		'react': 'React',
		'cq-prolyfill': 'cq'
	}
}
