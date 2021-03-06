import React from "react"
import Lolly from "../components/Lolly"
import { gql, useQuery } from "@apollo/client"

const getLolly = gql`
  query getLollyByUrl($path: String!) {
    getLollyByUrl(path: $path) {
      recepientName
      lollyPath
      message
      from
      flavorTop
      flavorMiddle
      flavorBottom
    }
  }
`

const showLolly =  ({ location }) => {
  const { data } = useQuery(getLolly, {
    variables: {
      path: location.state.path,
    },
  })



  


  return (
    <div >
        {
            data && (
                <div className="show-lolly">
                <Lolly lolyTop={data.getLollyByUrl.flavorTop} lolyBottom={data.getLollyByUrl.flavorBottom} lolyMiddle={data.getLollyByUrl.flavorMiddle} />
                <div>
                <p className="to">{data.getLollyByUrl.from} sent you a lolly!!</p>
                <p className="link-to">Share it with this link</p>
                <p className="link" >{data.getLollyByUrl.lollyPath}</p>
                <div className="lolly-container">
                  <p className="msg">{data.getLollyByUrl.recepientName}</p>
                  <p className="msg">{data.getLollyByUrl.message}</p>
                  <p className="from">~{data.getLollyByUrl.from}</p>
                </div>
                </div>
               
                </div>
            )
        }
    </div>
  )
}

export default showLolly
