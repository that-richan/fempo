-- Revert fempo:appschema from pg

BEGIN;

DROP SCHEMA organite;

COMMIT;
