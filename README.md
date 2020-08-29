G'day

## Installation 
```
$ npm install --save moist-modal
```

## Usage
```
	import React, { useState } from 'react';
	import MoistModal from 'moist-modal';

	function MyApp() {
		const [open, setOpen] = useState(true)

		return (
			<div>
				<MoistModal IsOpen={open} Close={() => setOpen(false)}/>
			</div>
		)
	}

```

1. Props
	```
	IsOpen: {Boolean}
	Header: {Modal title}
	Content: {Modal body content}
	CloseButton: {Close button value}
	StylingOverlay: {style for modal overlay}
	Styling: {Style for modal popup}
	
	```