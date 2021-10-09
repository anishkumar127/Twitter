import React, { useState } from 'react'

const TrendsKeyword = () => {
     const [state, setState] = useState([
          {
               id: 1,
               country: 'Trend In India',
               keyword: 'Something',
               totalKeywords: '2000k',
          },
          {
               id: 2,
               country: 'Trend In India',
               keyword: 'something 2',
               totalKeywords: '203300k',
          },
          {
               id: 3,




               country: 'Trend In India',
               keyword: 'Something 3',
               totalKeywords: '20300k',
          }
     ])
     return (
          <div className='keywords'><div className="key">

               <div className="keywords__heading"><h4>Trends for you</h4></div>
               {
                    state.map((keyword) => {
                         return (

                              <div key={keyword.id}>
                                   <div className="country"> {keyword.country}</div>
                                   <div className="keywords__name"><strong>{keyword.keyword}

                                   </strong></div>
                                   <div className="keywords_tweets">{keyword.totalKeywords}</div>


                              </div>
                         )
                    })
               }
          </div>
          </div>
     )
}

export default TrendsKeyword
