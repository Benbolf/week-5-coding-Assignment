class Skater {
    constructor(name, jerseyNumber) {
        this.name = name;
        this.jerseyNumber = jerseyNumber;
    }

    describe() {
        return `${this.name} has ${this.jerseyNumber}.`;
    }
}


class Team {
    constructior(name) {
        this.name = name
        this.skaters = [];
    }

    addSkater(Skater) {
        if (skaters instanceof Skater) {
            this.skaters.push(Skater);
        }   else {
            throw new Error(`You can only add an instance of Skater. Argument is not a Skater: ${Skater}`);
        }
    }

    describe() {
        return `${this.name} has ${this.skater.length} skater`
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
              case '1' :
                this.createTeam();
                break;
              case '2' :
                this.viewTeam();
                break;
              case '3':
                this.deleteTeam();
                break;
              default:
                   selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('See ya!');
    }
    
    showMainMenuOptions() {
        return prompt(`
          0) exit
          1) create new team
          2) view team
          3) delete team
        `);
    }

    createTeam() {
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name))
    }

    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
           this.selectedTeam = this.teams[index];
           let description = 'Team Name: ' + this.selectedTeam.name + '\n';

           for (let i = 0; i < this.selectedTeam.Skaters.length; i++) {
            description += i + ') ' ;this.selectedTeam.Skaters[i].name 
              + ' - ' + this.selectedTeam.Skaters[i].jerseyNumber + '\n';

           }
           let selection = this.showTeamMenuOptions(description);
           switch (selection) {
            case '1':
                this.createSkater();
                break;
            case '2':
                this.deletePlayer();

           }
        {
    }
}
   deleteTeam() ;{
    let index = prompt('Enter the index of the team you wish to delete:');
    if (index > -1 && index < this.teams.length) {
        this.teams.splice(index, 1);
    }
  } 


createSkater() ;{
    let name = prompt('Enter name for new Skater:');
    let jerseyNumber = prompt('Enter jersey number for new skater:');
    this.selectedTeam.skaters.push(new Skater (name, jerseyNumber));
  }

deleteSkater() ;{
    let index = prompt('Enter the index of the skater you wish to delete:');
    if (index > -1 && index < this.selectedTeam.skaters.length) {
        this.selectedTeam.skaters.splice(index, 1);

    }
  }
}
}


let menu = new Menu();
menu.start();
