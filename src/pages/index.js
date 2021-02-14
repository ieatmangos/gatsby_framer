import React from "react"
import { motion as m } from "framer-motion"

export default () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <main className="">
      <m.div
          animate={{ stdDeviation: [0, 5, 0] }}

        className="p-5 bg-pink-300"
      >
        YOOO
      </m.div>
    </main>
  )
}
