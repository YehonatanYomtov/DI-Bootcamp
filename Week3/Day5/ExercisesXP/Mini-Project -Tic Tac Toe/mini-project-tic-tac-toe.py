# First way: using matrix structure:
player_turn = 'x'
player_move = {}
winner = ''

board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
]

def display_board():
    print(f"""
    *****************
    *   {board[0][0]} | {board[0][1]} | {board[0][2]}   *
    *  ---|---|---  *
    *   {board[1][0]} | {board[1][1]} | {board[1][2]}   *
    *  ---|---|---  *
    *   {board[2][0]} | {board[2][1]} | {board[2][2]}   *
    *****************
    """)

display_board()

def winner_message(winner):
   print(f"######## ---- Player --> {winner} <-- won the game!🎉  🏆  🎉 ---- ########")

def player_input() :
    global player_move

    print(f"******** It's {player_turn} turn: ********")

    player_move["column"] = int(input("Select a column: "))
    player_move["row"] = int(input("Select a row: "))

def check_win():
    global winner, player_move, player_turn

    for i, _ in enumerate(board):
        if all(not " " in el and el == player_turn for el in board[i]):
            winner = player_turn
            winner_message(winner)
            break
    
    if board[0][0] == player_turn and board[1][1] == player_turn and board[2][2] == player_turn:
        winner = player_turn
        winner_message(winner)

    if board[2][0] == player_turn and board[1][1] == player_turn and board[0][2] == player_turn:
        winner = player_turn
        winner_message(winner)

    if board[0][0] == player_turn and board[1][0] == player_turn and board[2][0] == player_turn:
        winner = player_turn
        winner_message(winner)

    if board[0][1] == player_turn and board[1][1] == player_turn and board[2][1] == player_turn:
        winner = player_turn
        winner_message(winner)
    
    if board[0][2] == player_turn and board[1][2] == player_turn and board[2][2] == player_turn:
        winner = player_turn
        winner_message(winner)
    
    # if all(row[i] == player_turn for i, row in enumerate(board)):
    #     winner = player_turn
    #     winner_message(winner)
        

def play(move) :
    global board, player_turn

    column_i, row_i = move["column"], move["row"]
    
    for index, row in enumerate(board):
        if index + 1 == row_i:
            for i, el in enumerate(row):
                if i + 1 == column_i and el == " ":
                    board[index][i] = player_turn
                    
    check_win()

    player_turn = "x" if player_turn == "o" else "o"

    display_board()
    

while not winner:
    player_input()
    play(player_move)
    

    
    # all(row not " " in  for row in board):
        # print("######## ---- It's a tie!!! 🤝 ---- ########")


# # VS2:
# player_turn = 'x'
# player_move = {}
# winner = ''

# board = [' ',' ',' ',' ',' ',' ',' ',' ',' ']

# def display_board():
#     print(f"""
#     *****************
#     *   {board[0]} | {board[1]} | {board[2]}   *
#     *  ---|---|---  *
#     *   {board[3]} | {board[4]} | {board[5]}   *
#     *  ---|---|---  *
#     *   {board[6]} | {board[7]} | {board[8]}   *
#     *****************
#     """)

# display_board()

# def player_input() :
#    global player_move, player_turn

#    print(f"******** It's {player_turn} turn: ********")

#    player_move = int(input("Select a box (start at 1 horisontly etc.): "))

#    board[player_move - 1] = player_turn

# def winner_message(winner):
#    print(f"######## ---- Player --> {winner} <-- won the game!🎉  🏆  🎉 ---- ########")

# while not winner:
#    player_input()

#    winning_conditions = [
#       (0,1,2),
#       (4,5,6),
#       (7,8,9),
#       (0,3,6),
#       (1,4,7),
#       (2,5,8),
#       (0,4,8),
#       (2,4,6),
#    ]

#    for condition in winning_conditions:
#       if all(board[i] == player_turn for i in condition):
#          winner = player_turn
#          winner_message(winner)
#          break
       

#    if not " " in board:
#       print("######## ---- It's a tie!!! 🤝 ---- ########")

#    player_turn = "x" if player_turn == "o" else "o"

#    display_board()


