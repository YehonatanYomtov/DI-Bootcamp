import random

class Game:
    def __init__(self) -> None:
        pass

    def get_user_item(self) -> str:
        not_selected_correct_item = True
        
        while not_selected_correct_item:
            user_input = input("Select (r)ock, (p)aper, or (s)cissors: ").lower()
        
            if user_input not in ['r', 'p', 's']:
                continue
            else:
                not_selected_correct_item = False
                return user_input
            
    def get_computer_item(self):
        items = ['r', 'p', 's']
        random_choice = random.choice(items)
        
        return random_choice
        
    def get_game_result(self, user_item: str, computer_item: str) -> str:
        if user_item == "r" and computer_item == "s":
            return 'Win'
        elif user_item == "s" and computer_item == "p":
            return 'Win'
        elif user_item == "p" and computer_item == "r":
            return 'Win'
        elif user_item == computer_item:
            return 'Draw'
        else:
            return 'Loss'
        
    def play(self, user_item: str, computer_item: str) -> str:
        users_chosen_item = user_item
        computers_chosen_item = computer_item
        
        game_result = self.get_game_result(users_chosen_item, computers_chosen_item)
        
        print(f"""
You've selected {users_chosen_item}. The computer has chosen: {computer_item}. => You {game_result} 
            """)
        
        return game_result


