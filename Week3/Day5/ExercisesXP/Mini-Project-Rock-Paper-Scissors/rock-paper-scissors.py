from game import Game

def get_user_menu_choice() -> str:
        print("""
MENU:
These are your options:
    ▶︎ (g) -> Play a new game.
    ▶︎ (s) -> Show scores.
    ▶︎ (x) -> Exit the game.
""")

        user_input = input("Select one of the above options: ")
        return user_input

def print_results(results: dict) -> None:

    print(f"""
📢 THESE ARE YOUR GAME RESULTS:
    ◦ You won: {results['Win']} times.
    ◦ You lost: {results['Loss']} times.
    ◦ You drew: {results['Draw']} times.
        """)
    
def main():
    run_program = True
    game_results = {"Win": 0, "Loss": 0, "Draw": 0}
    
    print("📢 WELCOME TO ROCK PAPER SCISSORS! 📢")
    
    while run_program:
        user_input = get_user_menu_choice()
        
        if user_input in ["g", "s", "x"]:
            if user_input == "g":
                new_game = Game()
                
                new_game_result = new_game.play(new_game.get_user_item(), new_game.get_computer_item())
                
                for k in game_results.keys():
                    if new_game_result == k:
                        game_results[k] += 1

            elif user_input == "s":
                print_results(game_results)
            elif user_input == "x":
                print_results(game_results)
                print("Thank you for playing!")
                run_program = False
        else:
            get_user_menu_choice()
        
main()