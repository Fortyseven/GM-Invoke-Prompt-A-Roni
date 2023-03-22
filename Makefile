# watch src directory, call build.py on change

# TODO: replace watchmedo with something a little more common

all:
	@echo "Watching src directory for changes..."
	@watchmedo shell-command --patterns="*.js" --recursive --command="python build.py" src