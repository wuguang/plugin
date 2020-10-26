class MyPage{
    constructor(){
        this.init();
        this.initExeTime = 0;
    }

    init(){
     
        if(location.href.indexOf('https://www.baidu.com')>-1){
            this.initDeleteNode();
            this.addEvent();
        }
    }

    initDeleteNode(){
        let target = this.$('content_right');
        this.initExeTime += 30;
        
        if(target){
            this.deleteNode();
        }else{
            if(this.initDeleteNode<= 10000){
                //该页面没有目标，不做删除
                setTimeout(()=>{
                    this.initDeleteNode();
                },30);
            }
        };
    }

    deleteNode(){
        let parentDom = this.$('container');
        let rightContent = this.$('content_right');
        if(parentDom && rightContent){
            parentDom.removeChild(rightContent);
        }
    }

    addEvent(){
        document.addEventListener("DOMSubtreeModified", (e)=>{
            this.deleteNode();
        });
    }

    $(id){
        return document.getElementById(id);
    }
}

new MyPage();