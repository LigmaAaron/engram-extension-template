import { useState } from 'react'
import { Zap } from 'pixelarticons/react'
import { registerWidget, toast } from '../../core'

// Extension template — rename this file's parent folder to your extension's
// id before installing; the folder name becomes the module id in Engram.
function TemplateExtension() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Hello from a template extension! Clicked {count} times.</p>
      <button onClick={() => { setCount((c) => c + 1); toast('Clicked', `Count is now ${count + 1}`) }}>
        Click me
      </button>
    </div>
  )
}

registerWidget({
  id: 'template-extension',    // unique; also the sidebar view id — rename this
  title: 'Template Extension', // shown in the sidebar and card header
  icon: Zap,                   // any icon from pixelarticons/react
  order: 80,                   // sidebar + overview position; Engram's built-ins use 10-70
  span: 6,                     // overview grid columns out of 12 (only matters if Widget is set)
  Widget: TemplateExtension,   // overview card — omit to stay off the overview
  Page: TemplateExtension,     // solo page — omit to stay out of the sidebar
  // nav: {                      // optional sidebar extras
  //   badge: (state) => 0,        // count shown on the nav item when > 0
  //   onAdd: () => {},            // "+" button next to the nav item
  //   Panel: TemplateExtension,   // expandable sub-panel under the nav item
  // },
})

export default TemplateExtension
