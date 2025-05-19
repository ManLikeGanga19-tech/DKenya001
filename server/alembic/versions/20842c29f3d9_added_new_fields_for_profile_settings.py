"""added new fields for profile settings

Revision ID: 20842c29f3d9
Revises: 
Create Date: 2025-05-19 23:45:26.073233

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '20842c29f3d9'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.add_column('users', sa.Column('username', sa.String(), nullable=True))
    op.create_index(op.f('ix_users_username'),
                    'users', ['username'], unique=True)
    op.add_column('users', sa.Column(
        'profile_pic_url', sa.String(), nullable=True))


def downgrade():
    op.drop_index(op.f('ix_users_username'), table_name='users')
    op.drop_column('users', 'username')
    op.drop_column('users', 'profile_pic_url')
