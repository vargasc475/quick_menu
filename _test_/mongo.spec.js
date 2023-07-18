const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {

        connection = await MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db('admins')
    });
    afterAll(async() => {
        await connection.close()
    });

    it('should insert a new admin into the admins collection', async () => {
       const admin = db.collection('admins');

        const mockUser = {
            id: 'new-id',
            user: 'rojas',
            password: "1011267",
            
        }

        await admin.insertOne(mockUser)

        const insertedUser = await admin.findOne({ id: 'new-id' });

        expect(insertedUser).toEqual(mockUser)
    },
        
    it('should delete a user from the users collection', async () => {
        const admins = db.collection('admins')
        await admins.deleteMany({ id: 'new-id' })
        const deletedAdmin = await admins.findOne({ id: 'new-id' });
        expect(deletedAdmin).toEqual(null)
    })
)})