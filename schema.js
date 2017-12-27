var graphql = require('graphql')

let {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} = graphql;

let count = 0;

let schema = new GraphQLSchema({ //创建了一个 GraphQLSchema 实例
  query: new GraphQLObjectType({ //返回RootQueryType
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt, //graphql的类型：
        resolve: function() {
          return count;
        }
      },
      test: {
        type: GraphQLInt, //graphql的类型：
        resolve: function() {
          return 1;
        }
      }
    }
  })
});

module.exports = schema;