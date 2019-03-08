//DAO层操作封装为Promise
class NotesDao {
  //传入mongoose.model()的返回值 
  constructor(Model){
    this.Model = Model;
  }

  save(doc){
    return new Promise((resolve, reject) => {
      const entity = new this.Model(doc);
      entity.save((err, res) => {
          if(err) {
              reject(err);
          }else {
              resolve(res);
          }
      })
    });
  }
  create(doc){
    return new Promise((resolve, reject) => {
      const entity = new this.Model(doc);
        this.Model.create(entity, (err, res) => {
          if(err) {
              reject(err);
          }else {
              resolve(res);
          }
      })
    });
  }

  find(condition, constraints) {
    return new Promise((resolve, reject) => {
        this.Model.find(condition, constraints ? constraints : null, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
  }

  findOne(condition, constraints) {
      return new Promise((resolve, reject) => {
          this.Model.findOne(condition, constraints ? constraints : null, (err, res) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(res);
              }
          });
      });
  }

 //排序后第一条
  findOneByOrder(condition, orderColumn, orderType) {
      return new Promise((resolve, reject) => {
          this.Model.findOne(condition)
              .sort({[orderColumn]: orderType})
              .exec(function (err, record) {
                  console.log(record);
                  if (err) {
                      reject(err);
                  } else {
                      resolve(record);
                  }
              });
      });
  }

  update(condition, updater) {
      return new Promise((resolve, reject) => {
          this.Model.update(condition, updater, (err, res) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(res);
              }
          });
      });
  }

  remove(condition) {
      return new Promise((resolve, reject) => {
          this.Model.remove(condition, (err, result) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(result);
              }
          });
      });
  }
}
  
}