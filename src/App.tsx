import { PDFViewer } from '@react-pdf/renderer'
import './App.css'
import { MyDocument } from './components/MyDocument'

function App() {

  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  )
}

export default App
