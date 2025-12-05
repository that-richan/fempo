-- Verify fempo:appschema on pg

BEGIN;

DO $$
BEGIN
	ASSERT (SELECT has_schema_privilege('fempo', 'usage'));
END $$;

ROLLBACK;
