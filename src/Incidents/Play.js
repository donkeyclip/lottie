import MotorCortex from '@donkeyclip/motorcortex';

export default class MyEffect extends MotorCortex.Effect{

    getScratchValue(){
        return 0;
    }
    
    onGetContext(){
        
    }

    onProgress(fraction){
        const lottie = this.element.entity;
        lottie.goToAndStop(((this.targetValue - this.initialValue)* fraction+ this.initialValue)*lottie.totalFrames,true);
    }
}
