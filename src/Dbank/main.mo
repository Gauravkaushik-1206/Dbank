import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

//canister or class
actor Dbank{
  stable var currentValue: Float = 300;
  // currentValue := 300;

  // let id = 2312343;//let is a constant variable

  // Debug.print("Hello");
  // Debug.print(debug_show(currentValue));

  stable var startTime = Time.now();
  // startTime := Time.now();
  // Debug.print(debug_show(startTime));

  public func toUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));

  };

  public func withdraw(amount: Float){
    let temp: Float = currentValue - amount;
    if(temp >= 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    }
    else{
      Debug.print("Insufficient balance");
    }
  };

  public query func checkbalance(): async Float{
    return currentValue;
  };

  public func compound(){
    let currentTime = Time.now();
    let timeElapsed = (currentTime - startTime)/24*60*60*1000000000;
    currentValue := currentValue*(1.01 ** Float.fromInt(timeElapsed));
    startTime := currentTime;
  };

  // toUp();
}
