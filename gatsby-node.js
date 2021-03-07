require("dotenv").config();
const faunadb = require("faunadb")
const q = faunadb.query

exports.createPages = async function ({ actions}) {


    try{
        var client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
        var result = await client.query(
            q.Map(q.Paginate(q.Match(q.Index("all_lollies"))),q.Lambda("X", q.Get(q.Var("X"))))
          );
        
      }
      catch(err){
        console.log('err',err);
      }
    
    const {createPage} = actions


    if (result.data) {
        result.data.forEach((lolly) => {
        const data = lolly.data
          createPage({
            path: `/lolly/${data.lollyPath}/`,
            component: require.resolve(`./src/template/template.tsx`),
            context: {
              data
            },
          })
        })
      }
}
