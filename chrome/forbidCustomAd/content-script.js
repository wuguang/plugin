class MyPage{
    constructor(){
        this.hostname = location.hostname;
        this.init();
    }

    init(){
        this.addEvent();
    }

    checkNode(){
        if(this.hostname.indexOf('www.baidu.com')>-1){
            let parentDom = this.$('container');
            let rightContent = this.$('content_right');
            if(parentDom && rightContent){
                parentDom.removeChild(rightContent);
            }
        }
    }

    addEvent(){
        document.addEventListener("DOMSubtreeModified", (e)=>{
            this.checkNode();
        });
    }

    $(id){
        return document.getElementById(id);
    }
}

new MyPage();