import multer , { StorageEngine } from 'multer';
import path from 'path';


const tmpFolder = path.join(__dirname, '..', '..', 'uploads');

 export default {
   storage: multer.diskStorage({
     destination: tmpFolder,
     filename: (request, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`

        cb(null,filename);
     }
   })
 }
 
 
// interface IUploadConfig {

//   driver: 'disk' | 's3';
//   tmpFolder: string;
//   uploadsFolders: string;
//   multer: {
//     storage: StorageEngine
//   }
//   config: {
//     disk: {},
//     aws: {
//       bucket: string;
//     }
//   }
// }


// export default {
//   driver: process.env.STORAGE_DRIVER, 

//   tmpFolder: tmpFolder,
//   uploadsFolders: path.resolve(tmpFolder , 'uploads'),
//   multer: {
//     storage: multer.diskStorage({
//       destination: tmpFolder,
//       filename (request, file, callback) {
//           const fileHash = crypto.randomBytes(10).toString('hex');
//           const fileName = `${fileHash}-${file.originalname}`;
  
//           return callback(null, fileName);
//       },
//     }),
//   },
//   config: {
//     disk:  {},
//     aws: {
//       bucket: 'joaoappgobarber'
//     }
//   }

// } as IUploadConfig;