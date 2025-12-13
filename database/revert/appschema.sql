-- Revert fempo:appschema from pg

BEGIN;

DROP SCHEMA fempo;

COMMIT;
