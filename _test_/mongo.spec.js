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
    })

    it('should insert a new admin into the admins collection', async () => {
        const admin = db.collection('admins');

        const mockUser = {
            id: 'admin-id',
            user: 'rojas',
            password: "1011267",
            
        }

        await admin.insertOne(mockUser)

        const insertedUser = await admin.findOne({ id: 'admin-id' });

        expect(insertedUser).toEqual(mockUser)
    },
        
    it('should delete a user from the users collection', async () => {
        const users = db.collection('admins')
        await users.deleteMany({ id: 'user-id' })
        const deletedUser = await users.findOne({ id: 'admin-id' });
        expect(deletedUser).toEqual(null)
    })
)})