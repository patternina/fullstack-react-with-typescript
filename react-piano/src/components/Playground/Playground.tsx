import { InstrumentContextProvider } from "../../state"

import { KeyboardWithInstrument } from "../Keyboard"
import { InstrumentSelector } from "../InstrumentSelector"

export const Playground = () => (
  <InstrumentContextProvider>
    <div className="playground">
      <KeyboardWithInstrument />
      <InstrumentSelector />
    </div>
  </InstrumentContextProvider>
)
