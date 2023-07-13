const graphql = require('graphql');
const db = require("../models");
const { query } = require('express');
const dishes = db.dishes
const desserts = db.desserts
const orders = db.orders
const admins = db.admins


const { 
  GraphQLObjectType, GraphQLString, 
  GraphQLID, GraphQLInt,GraphQLSchema, 
  GraphQLList,GraphQLNonNull
} = graphql;

const DishType = new GraphQLObjectType({
    name: 'Dish',
    
    fields: () => ({
        _id: {type:GraphQLID},
        id: { type: GraphQLString },
        name: { type: GraphQLString }, 
        weight: { type: GraphQLString },
        people: {type: GraphQLString},
        takeHome: {type: GraphQLString},
        price: {type: GraphQLString}
        
    })
});

const DessertsType = new GraphQLObjectType({
  name: 'Dessert',
  
  fields: () => ({
      id: { type: GraphQLString  },
      name: {type:GraphQLString},
      people: { type: GraphQLString }, 
      takeHome: { type: GraphQLString },
      price: {type: GraphQLString},  
  })
});

const OrdersType = new GraphQLObjectType({
  name: 'Orders',
  
  fields: () => ({
      client: { type: GraphQLString  },
      table: {type:GraphQLString},
      dish:{ type: DishType,
        
        resolve(parent, args) {
            return dishes.findById(parent.dish);
        }}, 
      desserts: { type: GraphQLString },
      totalPrice: {type: GraphQLString},  
  })
});

const adminsType = new GraphQLObjectType({
  name: 'Admin',
  
  fields: () => ({
      user: { type: GraphQLString  },
      password: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
      dish:{
        type: DishType,
            args: { dish: { type: GraphQLID } },
            resolve(parent, args) {
                return dishes.findById(args.dish);
            }

      },
      
      dishes:{
          type: new GraphQLList(DishType),
          resolve(parent, args) {
              return dishes.find({});
          }
      },
      desserts:{
        type: new GraphQLList(DessertsType),
        resolve(parent, args) {
            return desserts.find({});
        }
    },
      orders:{
        type: new GraphQLList(OrdersType),
        resolve(parent, args) {
            return orders.find({});
        }
    },
      admins:{
        type: new GraphQLList(adminsType),
        resolve(parent, args) {
            return admins.find({});
        }
    },
      
      
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});