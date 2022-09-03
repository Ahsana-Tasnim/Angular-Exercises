export class Foo{

    //public name;

    constructor(public name:string){
        this.name = name;
    }

    fire(){
        console.log('BANG'!);
    }

    fireWeapon(weapon:Foo.Weapons){
        console.log(`Fire the ${weapon}`);
    }

    fireWeaponToString(weapon:Foo.Weapons):string{
        return Foo.Weapons[weapon];
    }
}

export namespace Foo{
    export enum Weapons{Canon, Torpedos, MachineGun, DeathRay, NailGun};
}

let myFirstFoo = new Foo('Ahsana');

console.log(`I am a student and my name is ${myFirstFoo.name}`);

myFirstFoo.fire();

myFirstFoo.fireWeapon(Foo.Weapons.DeathRay);

let theWeapon: string;
theWeapon = myFirstFoo.fireWeaponToString(Foo.Weapons.DeathRay);
console.log(`The weapon fired from toString is ${theWeapon}`);
