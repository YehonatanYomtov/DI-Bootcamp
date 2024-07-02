
player_turn = 'x'
player_move = {}
winner = ''

board = [' ',' ',' ',' ',' ',' ',' ',' ',' ']

def display_board():
    print(f"""
    *****************
    *   {board[0]} | {board[1]} | {board[2]}   *
    *  ---|---|---  *
    *   {board[3]} | {board[4]} | {board[5]}   *
    *  ---|---|---  *
    *   {board[6]} | {board[7]} | {board[8]}   *
    *****************
    """)

display_board()

def player_input() :
   global player_move, player_turn

   print(f"******** It's {player_turn} turn: ********")

   player_move = int(input("Select a box (start at 1 horisontly etc.): "))

   board[player_move - 1] = player_turn

def winner_message(winner):
   print(f"######## ---- Player --> {winner} <-- won the game!🎉  🏆  🎉 ---- ########")

while not winner:
   player_input()

   winning_conditions = [
      (0,1,2),
      (4,5,6),
      (7,8,9),
      (0,3,6),
      (1,4,7),
      (2,5,8),
      (0,4,8),
      (2,4,6),
   ]

   for condition in winning_conditions:
      if all(board[i] == player_turn for i in condition):
         winner = player_turn
         winner_message(winner)
         break
       

   if not " " in board:
      print("######## ---- It's a tie!!! 🤝 ---- ########")

   player_turn = "x" if player_turn == "o" else "o"

   display_board()


