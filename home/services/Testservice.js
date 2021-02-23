import axios from "axios";
class Testservice {
  addData(da) {
    //return false;
    var promise = axios({
      method: "post",
      url: "https://resumebuilder.caapis.com/test/putData",
      data: {
        id: da.id,
        message: da.msg,
      },
    });
    return promise;
  }
  get_jprops(jprp) {
    let req_url;
    if (jprp.type === "logo") {
      req_url = "https://resumebuilder.caapis.com/aws/getjsonV2";
    } else if (jprp.type === "resume") {
      req_url = "https://resumebuilder.caapis.com/aws/getjson";
    } else if (jprp.type === "flyer") {
      req_url = "https://resumebuilder.caapis.com/aws/getjsonV3";
    } else if (jprp.type === "poster") {
      req_url = "https://resumebuilder.caapis.com/aws/getjsonV4";
    }
    let prom = axios({
      method: "post",
      url: req_url,
      // url: 'https://resumebuilder.caapis.com/aws/getjsonV2',
      // url: 'http://localhost:3001/aws/getjson',
      data: {
        category: jprp.category,
        json: jprp.json,
      },
    });
    return prom;
  }
  get_sKeys(keys) {
    let promise = axios({
      method: "post",
      url: "https://resumebuilder.caapis.com/aws/getSkeys",
      // url: 'http://localhost:3001/aws/getSkeys',
      data: {
        key: keys,
      },
    });
    return promise;
  }

  get_thumbs_resume(ctg) {
    let promise = axios({
      method: "post",
      url: "https://resumebuilder.caapis.com/aws/getthumbs",
      // url: 'http://localhost:3001/aws/getthumbs',
      data: {
        category: ctg,
      },
    });
    return promise;
  }

  get_thumbs_logo(ctg) {
    let promise = axios({
      method: "post",
      url: "https://resumebuilder.caapis.com/aws/getthumbsV2",
      // url: 'http://localhost:3001/aws/getthumbs',
      data: {
        category: ctg,
      },
    });
    return promise;
  }

  get_thumbs_flyer(ctg) {
    let promise = axios({
      method: "post",
      url: "https://resumebuilder.caapis.com/aws/getthumbsV3",
      // url: 'http://localhost:3001/aws/getthumbs',
      data: {
        category: ctg,
      },
    });
    return promise;
  }
  get_thumbs_poster(ctg) {
    let promise = axios({
      method: "post",
      url: "https://resumebuilder.caapis.com/aws/getthumbsV4",
      // url: 'http://localhost:3001/aws/getthumbs',
      data: {
        category: ctg,
      },
    });
    return promise;
  }

  ack_dnl(obj) {
    var fdata = new FormData();
    fdata.set("authtoken", obj.d_tk);
    fdata.set("type", 3);
    fdata.set("action", "htp");
    fdata.set("rawhtml", obj.pl_html);
    fdata.set("width", obj.width);
    fdata.set("height", obj.height);
    fdata.set("clienttype", obj.clienttype);
    fdata.set("applymargin", obj.applymargin);
    let promise = axios({
      method: "post",
      url: obj.d_ur,
      data: fdata,
    });
    return promise;
  }
  ack_dnl_i(obj) {
    var fdata = new FormData();
    fdata.set("authtoken", obj.d_tk);
    fdata.set("type", 3);
    fdata.set("action", "hti_" + obj.d_ty);
    fdata.set("rawhtml", obj.pl_html);
    fdata.set("width", obj.width);
    fdata.set("height", obj.height);
    fdata.set("clienttype", obj.clienttype);
    fdata.set("applymargin", obj.applymargin);
    if (obj.transparent) {
      fdata.set("transparent", "yes");
    }
    //fdata.set('image_type', obj.d_ty)
    let promise = axios({
      method: "post",
      url: obj.d_ur,
      data: fdata,
    });
    return promise;
  }
  // ack_dnl(obj) {
  //     var fdata = new FormData();
  //     //fdata.set('token', obj.d_tk);
  //     fdata.set('html', obj.pl_html);
  //     fdata.set('action', 'htp');
  //     let promise = axios({
  //         method: "post",
  //         url: obj.d_ur,
  //         data: fdata
  //     })
  //     return promise;
  // }

  // ack_dnl_i(obj) {
  //     var fdata = new FormData();
  //     fdata.set('html', obj.pl_html);
  //     fdata.set('action', 'hti');
  //     fdata.set('image_type', obj.d_ty)
  //     let promise = axios({
  //         method: "post",
  //         url: obj.d_ur,
  //         data: fdata
  //     })
  //     return promise;
  // }
}
export default Testservice;
