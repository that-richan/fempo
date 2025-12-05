# Database

## Usage

```sh
task database:sqitch -- add <name> -r <depend> # Add a new change <name> which depends on <depend> (migration)
task database:sqitch -- deploy --verify # Deploy & verify all unapplied changes
task database:sqitch -- revert --to <change> # Reverts all changes up to the <change> change
```

You are encouraged to read the docs or use `task database:sqitch -- help <command>`.
